import { http, HttpResponse } from "msw";
import {
  cardMatchMockScenarios,
  cardSearchMockData,
  cardTokensMock,
  mulliganMockData,
} from "@/mocks/data/mockData";
import { Card, Game } from "@/app/(frontbuild)/types";

// --- Search Card Mock Types
type SearchCardRequestBody = { cardName: string };
type SearchCardResponse = Card;

// --- Create Match Request Types
type HearthstoneMatchRequest = { win: string; matchUrl: string };
export type HearthstoneMatchCreatedResponse = Game;
export type HearthstoneMatchCreatedError = { message: string };

// --- Get Mulligan Request Types
type GetMulliganRequestParams = {
  type: string;
  classId: string;
};

export const hearthstoneApiHandlers = [
  http.get<GetMulliganRequestParams>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/mulligan`,
    ({ request }) => {
      const url = new URL(request.url);
      const productId = url.searchParams.get("classId");
      const type = url.searchParams.get("type");

      if (!productId || !type) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json(mulliganMockData);
    },
  ),
  http.post<
    never,
    HearthstoneMatchRequest,
    HearthstoneMatchCreatedResponse | HearthstoneMatchCreatedError
  >(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/card-match-results`,
    async ({ request }) => {
      const requestData: HearthstoneMatchRequest = await request.json();
      const match_url = requestData.matchUrl;
      const mockResponse = cardMatchMockScenarios[match_url];
      return HttpResponse.json(mockResponse.response, {
        status: mockResponse.status,
      });
    },
  ),
  http.post<SearchCardRequestBody, SearchCardResponse>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/card`,
    async ({ request }) => {
      const requestData = await request.json();
      console.log("Received request data:", requestData);
      return HttpResponse.json(cardSearchMockData);
    },
  ),
  http.get<{ id: string }, Card[]>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/card/:id`,
    ({ params }) => {
      const { id } = params;
      //TODO: generate error scenarios
      const defaultId = id as string;
      console.log(defaultId);
      return HttpResponse.json(cardTokensMock);
    },
  ),
];
