import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface UpdateSearchParamsValue {
  query: string;
  value: string;
}

export default function useUpdateSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const updateSearchParams = (...params: UpdateSearchParamsValue[]) => {
    const urlParams = new URLSearchParams(searchParams);
    params.forEach(({ query, value }) => {
      urlParams.set(query, value);
    });
    router.replace(`${pathname}?${urlParams.toString()}`);
  };

  const deleteSearchParam = (...queries: string[]) => {
    const urlParams = new URLSearchParams(searchParams);
    queries.forEach((query) => urlParams.delete(query));
    router.replace(`${pathname}?${urlParams.toString()}`);
  };

  return { updateSearchParams, deleteSearchParam };
}
