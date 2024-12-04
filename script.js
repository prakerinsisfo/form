* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}

body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
}

.container {
    width: 500px;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h4 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

input, select, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input[type="submit"] {
    border: none;
    background-color: #28a745;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
}

input[type="submit"]:hover {
    background-color: #218838;
}
