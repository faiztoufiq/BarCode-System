import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "@/common/apiRoutes";
//  import { selectToken } from "./authSlice";
// import cookie from "js-cookie";


export const emptySplit = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL,

    // prepareHeaders: async (headers, { getState }) => {
    //   try {
    //      const token = selectToken(getState());
    //      console.log("===>",token)
    //     if (token) {
    //       headers.set("Authorization", token);
    //     } else {
    //       headers.set("Authorization", "");
    //     }
    //   } catch (err) {
    //     headers.set("Authorization", "");
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url:API_ENDPOINTS.SIGNUP,
        method: "POST",
        body: body,
      }),
    }),
    logIn: builder.mutation({
      query: (credentials) => ({
        url: API_ENDPOINTS.SIGNIN,
        method: "POST",
        body: credentials,
      }),
    }),
  }),

  tagTypes: [],
});

export const {
 useSignUpMutation,
useLogInMutation,
} = emptySplit;
