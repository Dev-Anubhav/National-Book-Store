import axios from "axios";
import registerSchema from "../Schema";
import FormUi from "./formUi";
import { useFormik } from "formik";
import { bookAPIConfig } from "../../APi/apiConfig";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Registration = () => {
    const navi = useNavigate();

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const difference = Date.now() - birthDate.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const initialValues = {
        name: '',
        mobileNumber: '',
        dob: '',
        gender: '',
    };


    const { handleSubmit, handleChange, touched, errors, handleBlur, values } = useFormik({
        initialValues: initialValues,
        validationSchema: registerSchema,
        onSubmit: async (values, action) => {
            const formattedData = {
                name: values.name,
                age: calculateAge(values.dob), 
                gender: values.gender,
                mobile: values.mobileNumber,
            };

       

            try {
                const response = await axios.post(bookAPIConfig.signUp, formattedData, {
                    headers: {
                        "ngrok-skip-browser-warning": "1"
                    }
                });
              
                localStorage.setItem("formData", JSON.stringify(formattedData));
            } catch (error) {
               console.log(error)
            }

            action.resetForm();
            navi("/");
        }
    });

    return (
        <div className="registration relative w-screen h-screen py-20 sm:py32">
            <h4 className="ml-4 text-white font-poppin flex items-center gap-2 cursor-pointer" onClick={()=>navi('/')}><FaArrowLeft/> Return To Home</h4>

            <div className="w-screen mx-auto">
                <FormUi 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    touched={touched}
                    values={values}
                    handleBlur={handleBlur}
                />
            </div>
        </div>
    );
};

export default Registration;
