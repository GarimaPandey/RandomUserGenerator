import React, { useState, useEffect } from 'react';

function UserList() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [recentlyViewed, setRecentlyViewed] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data.data);
        setTotalPages(data.last_page);
      });
  }, [currentPage]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowClick = user => {
    setRecentlyViewed(user);
  };

  return (
    <div>
      <h1>Random User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id} onClick={() => handleRowClick(user)}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevClick} disabled={currentPage === 1}>Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>Next</button>
      </div>
      {recentlyViewed && (
        <div>
          <h2>Recently Viewed:</h2>
          <p>{recentlyViewed.first_name} {recentlyViewed.last_name}</p>
        </div>
      )}
    </div>
  );
}

export default UserList;
