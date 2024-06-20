import {useLocation} from "react-router-dom";

export const useQueryParam = (name: string) =>
    new URLSearchParams(useLocation().search).get(name)
