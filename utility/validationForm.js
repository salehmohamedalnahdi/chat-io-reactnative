import * as yup from "yup"


export default function ValidationForm (){
    const schemaValidation=yup.object({
        user: yup.string()
        .required(),
        message: yup.string()
        .required()
    })
    return schemaValidation;
}