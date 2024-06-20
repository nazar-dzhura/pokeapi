import { useLocation, useNavigate } from 'react-router-dom';
import {isNil} from "lodash";

type QueryParams = {
    [key: string]: string | number | boolean | (string | number | boolean)[] | null | undefined;
};

export default function useQueryParamSetter(): (params: QueryParams) => void {
    const location = useLocation();
    const navigate = useNavigate();

    function setQueryParam(params: QueryParams): void {
        const searchParams = new URLSearchParams(location.search);

        Object.keys(params).forEach((key) => {
            const value = params[key];
            if (value === '' || isNil(value)) {
                searchParams.delete(key);
            } else if (Array.isArray(value)) {
                if (value.length) {
                    searchParams.set(key, value.join(','));
                } else {
                    searchParams.delete(key);
                }
            } else {
                searchParams.set(key, String(value));
            }
        });

        const newSearch = searchParams.toString();

        navigate({
            pathname: location.pathname,
            search: `?${newSearch}`,
        }, { replace: true });
    }

    return setQueryParam;
}
