"use client";
import Image from "next/image";
import { shoppingImage, logo } from "../../../../public/assets";
import { commonText } from "@/common/constant";
import { Formik, Form, ErrorMessage } from "formik";
import { signUpValidation } from "@/common/formik";
import { useSignUpMutation } from "@/redux/slices/emptySplit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routesLink } from "@/common/routes";
import { inputFields } from "../signup/data";
import InputField from "@/components/forms";
export default function Login() {
  interface SignupFormValues {
    email: string;
    password: string;
    confirmPassword: string;
  }
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const handleSubmit = async (values: any) => {
    try {
      const response = await signUp(values).unwrap();
      console.log(commonText.userRegesteredSuccessfully, response);
      toast.success(commonText.userRegesteredSuccessfully);
      window.location.href = routesLink.login;
    } catch (error) {
      console.log(commonText.regestrationFailed, error);
      toast.error(commonText.regestrationFailed);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={signUpValidation}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur }) => (
        <div className="flex min-h-screen items-center justify-center bg-[#f7e5d5] p-6">
          <ToastContainer />
          <div className="flex w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="flex w-1/2 h-[640px] items-center justify-center bg-[#fae4c8] p-8">
              <div className="text-center">
                <div className="mb-6">
                  <Image
                    src={shoppingImage}
                    alt="Skeleton illustration"
                    width={300}
                    height={300}
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#3d1b0f]">
                  {commonText.turnYourIdeasIntoReality}
                </h2>
                <p className="mt-2 text-[#7d4c3e]">
                  {commonText.attractiveoffersFromTheCommunity}
                </p>
              </div>
            </div>

            <div className="w-1/2 p-8">
              <div className="mb-8 text-center">
                <Image src={logo} alt="Logo icon" width={40} height={40} />
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                  {commonText.loginToYourAccount}
                </h2>
                <p className="mt-1 text-gray-500">
                  {commonText.goingOnWithYourBusiness}
                </p>
              </div>

              <Form className="space-y-8">
                {inputFields.map((field) => (
                  <div key={field.name}>
                    <InputField
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder as keyof SignupFormValues}
                      value={values[field.name as keyof SignupFormValues]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}

                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="form-checkbox h-4 w-4 text-purple-500"
                    />
                    <span className="ml-2">{commonText.rememberMe}</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-purple-600 hover:underline"
                  >
                    {commonText.forgotPassword}
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full rounded bg-purple-700 py-3 text-white transition hover:bg-purple-800"
                >
                  {isLoading ? commonText.loading : commonText.signUp}
                </button>

                {error && (
                  <div className="text-red-500 text-sm mt-2">
                    {commonText.anErrorOccur}
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
