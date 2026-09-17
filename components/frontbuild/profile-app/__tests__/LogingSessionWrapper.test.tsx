// LogingSessionWrapper.test.tsx
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { getRouteConfig } from "@/lib/routes";
import { decodeJwt } from "@/lib/utils";
import { useRefreshQuery } from "@/lib/features/auth/authApiSlice";
import LoginSessionWrapper from "../LogingSessionWrapper";

// --- Mocks ---
const replace = jest.fn();
let mockPathname = "/";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace }),
  usePathname: () => mockPathname,
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("@/lib/routes", () => ({ getRouteConfig: jest.fn() }));
jest.mock("@/lib/utils", () => ({ decodeJwt: jest.fn() }));
jest.mock("@/lib/features/auth/authApiSlice", () => ({
  useRefreshQuery: jest.fn(),
}));

const mockUseSelector = useSelector as unknown as jest.Mock;
const mockGetRouteConfig = getRouteConfig as jest.Mock;
const mockDecodeJwt = decodeJwt as jest.Mock;
const mockUseRefreshQuery = useRefreshQuery as jest.Mock;

// --- Helpers ---
function setup({
  token = null as string | null,
  role = null as string | null,
  routeConfig = null as { roles?: string[]; redirectTo?: string } | null,
  isLoading = false,
  pathname = "/dashboard",
} = {}) {
  mockPathname = pathname;
  mockUseSelector.mockImplementation((selector) =>
    selector({ auth: { accessToken: token } }),
  );
  mockDecodeJwt.mockReturnValue(role ? { roles: role } : null);
  mockGetRouteConfig.mockReturnValue(routeConfig);
  mockUseRefreshQuery.mockReturnValue({ isLoading });

  return render(
    <LoginSessionWrapper>
      <div>contenido protegido</div>
    </LoginSessionWrapper>,
  );
}

beforeEach(() => jest.clearAllMocks());

describe("LoginSessionWrapper", () => {
  it("muestra loader mientras refresca la sesión", () => {
    setup({ isLoading: true, routeConfig: { roles: ["admin"] } });
    expect(screen.getByText("Cargando sesión...")).toBeInTheDocument();
    expect(replace).not.toHaveBeenCalled();
  });

  it("renderiza children en ruta pública", () => {
    setup({ routeConfig: null });
    expect(screen.getByText("contenido protegido")).toBeInTheDocument();
    expect(replace).not.toHaveBeenCalled();
  });

  it("redirige a redirectTo cuando no hay token", () => {
    setup({ token: null, routeConfig: { redirectTo: "/signin" } });
    expect(replace).toHaveBeenCalledWith("/signin");
    expect(screen.queryByText("contenido protegido")).toBeNull();
  });

  it("redirige a /login por defecto cuando no hay token ni redirectTo", () => {
    setup({ token: null, routeConfig: {} });
    expect(replace).toHaveBeenCalledWith("/login");
  });

  it("redirige a /unauthorized si el rol no está permitido", () => {
    setup({
      token: "jwt",
      role: "user",
      routeConfig: { roles: ["admin"] },
    });
    expect(replace).toHaveBeenCalledWith("/unauthorized");
    expect(screen.queryByText("contenido protegido")).toBeNull();
  });

  it("redirige a /unauthorized si el token no tiene rol", () => {
    setup({ token: "jwt", role: null, routeConfig: { roles: ["admin"] } });
    expect(replace).toHaveBeenCalledWith("/unauthorized");
  });

  it("renderiza children si el rol está permitido", () => {
    setup({
      token: "jwt",
      role: "admin",
      routeConfig: { roles: ["admin"] },
    });
    expect(screen.getByText("contenido protegido")).toBeInTheDocument();
    expect(replace).not.toHaveBeenCalled();
  });

  it("renderiza children en ruta protegida sin restricción de roles", () => {
    setup({ token: "jwt", role: "user", routeConfig: {} });
    expect(screen.getByText("contenido protegido")).toBeInTheDocument();
  });

  it("no redirige mientras isLoading aunque falte token", () => {
    setup({ token: null, routeConfig: {}, isLoading: true });
    expect(replace).not.toHaveBeenCalled();
  });
});
