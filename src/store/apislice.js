import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//this is where we fetch the data all in one without axios
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
    /*
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },*/
  }),
  //used to invalidate the data automatically
  tagTypes: [
    "Employees"
  ],
  endpoints: (builder) => ({
    //every function here will have  is loading ,is errorr,is success etc...
    getEmployees: builder.query({
      query: () => "employees",
      providesTags: ["Employees"],
    }),
    addEmployees: builder.mutation({
      query: (employee) => ({
        url: "employees",
        method: "POST",
        body: employee,
      }),
      invalidatesTags: ["Employees"],
    }),
    updateEmployees: builder.mutation({
      query: (employee, id) => ({
        url: "employees",
        method: "PUT",
        body: employee,
        id,
      }),
      invalidatesTags: ["Employees"],
    }),

    deleteEmployees: builder.mutation({
      query: ({id}) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employees"],
    }),
}),
});

export const {
    useGetEmployeesQuery,
    useAddEmployeesMutation,
    useUpdateEmployeesMutation,
    useDeleteEmployeesMutation,
} = apiSlice;