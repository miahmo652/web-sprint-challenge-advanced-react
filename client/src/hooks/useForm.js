// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage.js";

export const useForm = (initialValues, key) => {
    const [values, setValues] = useLocalStorage(initialValues, key);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      return [values, handleChanges]
}