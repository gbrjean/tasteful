"use client";

import { useRouter } from "next/navigation";


interface Props {
  pageNumber: number;
  isNext: boolean;
  path: string;
}

function Pagination({ pageNumber, isNext, path }: Props) {
  const router = useRouter();

  const handleNavigation = (type: string) => {
    let nextPageNumber = pageNumber;

    if (type === "prev") {
      nextPageNumber = Math.max(1, pageNumber - 1);
    } else if (type === "next") {
      nextPageNumber = pageNumber + 1;
    }

    if (nextPageNumber > 1) {
      router.push(`/${path}?page=${nextPageNumber}`);
    } else {
      router.push(`/${path}`);
    }
  };

  if (!isNext && pageNumber === 1) return null;

  return (
    <div id='pagination'>
    { pageNumber !== 1 && (
      <button
        onClick={() => handleNavigation("prev")}
        className='btn btn-narrow btn-outline btn-colorful'
      >
        Prev
      </button>
    )}
    <p>{pageNumber}</p>
    { isNext ? (
      <button
      onClick={() => handleNavigation("next")}
      className='btn btn-narrow btn-outline btn-colorful'
      >
        Next
      </button>
    ) : null}
    </div>
  );
}

export default Pagination;