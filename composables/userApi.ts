// // composables/useApi.ts
// export const useApi = () => {
//   const config = useRuntimeConfig()
//   const baseURL = config.public.apiBase as string

//   return {
//     get: <T>(url: string) => useFetch<T>(url, { baseURL }),
//     post: <T>(url: string, body: any) =>
//       useFetch<T>(url, { method: 'POST' , body, baseURL }),
//   }
// }
