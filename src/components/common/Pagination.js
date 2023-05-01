import React, { useState } from 'react';

const Pagination = ({activePage, itemsCountPerPage, totalItemsCount, onChange}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItemsCount / itemsCountPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
        onChange(page)
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                    <span role="button" className="page-link" onClick={() => handleClick(i)}>{i}</span>
                </li>
            );
        }

        return pageNumbers;
    };

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <span role="button" className="page-link" onClick={() => handleClick(currentPage - 1)}>Previous</span>
                </li>
                {renderPageNumbers()}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <span role="button" className="page-link" onClick={() => handleClick(currentPage + 1)}>Next</span>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;