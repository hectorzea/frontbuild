import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.get<never>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/auth/refresh`,
    () => {
      return HttpResponse.json({ accessToken: "123" });
    },
  ),
  //   http.post<
  //     never,
  //     HearthstoneMatchRequest,
  //     HearthstoneMatchCreatedResponse | HearthstoneMatchCreatedError
  //   >(
  //     `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/card-match-results`,
  //     async ({ request }) => {
  //       const requestData: HearthstoneMatchRequest = await request.json();
  //       const match_url = requestData.matchUrl;
  //       const mockResponse = cardMatchMockScenarios[match_url];
  //       return HttpResponse.json(mockResponse.response, {
  //         status: mockResponse.status,
  //       });
  //     },
  //   ),
  //   http.post<SearchCardRequestBody, SearchCardResponse>(
  //     `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/card`,
  //     async ({ request }) => {
  //       const requestData = await request.json();
  //       console.log("Received request data:", requestData);
  //       return HttpResponse.json(cardSearchMockData);
  //     },
  //   ),
  //   http.get<{ id: string }, Card[]>(
  //     `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/card/:id`,
  //     ({ params }) => {
  //       const { id } = params;
  //       //TODO: generate error scenarios
  //       const defaultId = id as string;
  //       console.log(defaultId);
  //       return HttpResponse.json(cardTokensMock);
  //     },
  //   ),
];
