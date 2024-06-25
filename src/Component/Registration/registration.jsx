import axios from "axios";
import registerSchema from "../Schema";
import FormUi from "./formUi";
import { useFormik } from "formik";
import { bookAPIConfig } from "../../APi/apiConfig";
import { useNavigate } from "react-router-dom";

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
            <div className="max-w-4xl mx-auto">
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
