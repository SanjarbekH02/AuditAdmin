import React, { useState } from "react";
import './Dashboard.css';

const Dashboard = () => {
    const initialData = Array.from({ length: 105 }, (_, index) => ({
        id: index + 1,
        teacherName: "Xoldorova Nafisa",
        startDate: "12 Aug 2022 - 12:25 am",
        topic: "Audit va buxgalteriya",
        midtermResult: "92 ball",
        finalResult: "92 ball",
        purchasedCourses: "2 ta",
        status: index % 2 === 0 ? "Completed" : "In-Progress",
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState(initialData);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filteredData = initialData.filter((row) =>
            row.teacherName.toLowerCase().includes(value)
        );
        setData(filteredData);
        setCurrentPage(1);
    };

    // Pagination calculations
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentRows = data.slice(startIndex, startIndex + rowsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="dashboard">
            <div className="edit-block">
                <i className="ri-pencil-fill"></i>
                <i className="ri-delete-bin-5-line"></i>
            </div>

            <div className="table-block">
                <div className="statistika">
                    <h3 className="statistika-title">Statistika</h3>
                    <div className="search">
                        <label className="label-search">
                            <i className="ri-search-line"></i>
                            <input onChange={handleSearch} placeholder="Search.." type="text" className="search-input" />
                        </label>
                        <div className="complaint">
                            <button className="complaint-btn">
                                <span className="attention">!</span>
                                Shikoyat qilish
                            </button>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-th1">Tanlash</th>
                            <th className="table-th">O‘quvchilar ro‘yxati</th>
                            <th className="table-th">Boshlangan sanasi</th>
                            <th className="table-th">O‘qiyotgan mavzusi</th>
                            <th className="table-th">Oraliq test natijasi</th>
                            <th className="table-th">Yakuniy test natijasi</th>
                            <th className="table-th">Sotib olgan kurslari</th>
                            <th className="table-ths">Status</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {currentRows.map((row) => (
                            <tr key={row.id}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td className="table-td">{row.teacherName}</td>
                                <td className="table-td">{row.startDate}</td>
                                <td className="table-td">{row.topic}</td>
                                <td className="table-td">{row.midtermResult}</td>
                                <td className="table-td">{row.finalResult}</td>
                                <td className="table-td">{row.purchasedCourses}</td>
                                <td className="table-status">
                                    <span className={`status-prog ${row.status === "Completed" ? "status-completed" : ""}`}>
                                        {row.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <div className="pagination-left">
                        <span className="items-page">10 <i className="ri-arrow-down-s-line"></i></span>
                        <span className="items-page-name">Items per page</span>
                        <div className="items-number">
                            {`${startIndex + 1}-${Math.min(startIndex + rowsPerPage, data.length)} of ${data.length} items`}
                        </div>
                    </div>
                    <div className="pagination-right">
                        <span className="items-page-name">
                            {currentPage} of {totalPages} pages
                        </span>
                        <button className="pagination-btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            <i className="ri-arrow-left-wide-line"></i>
                        </button>
                        <button className="pagination-btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            <i className="ri-arrow-right-wide-line"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
