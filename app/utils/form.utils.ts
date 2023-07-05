export const ConvertFormDataToJson = (formData: FormData) => {
    const json: any = {};

    for (let [key, value] of formData) {
        json[key] = value;
    }

    return json;
}