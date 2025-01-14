CREATE DATABASE car_rental_db;

CREATE TABLE Cars (
    CarID INT IDENTITY(1,1) PRIMARY KEY,   -- معرف فريد لكل سيارة
    Model NVARCHAR(50) NOT NULL,            -- الطراز
    Brand NVARCHAR(50) NOT NULL,            -- العلامة التجارية
    Status NVARCHAR(20) DEFAULT 'Available', -- الحالة (متوفرة / مؤجرة)
    DailyRate DECIMAL(10, 2) NOT NULL,      -- سعر الإيجار اليومي
    PlateNumber NVARCHAR(20) UNIQUE NOT NULL -- رقم اللوحة
);
CREATE TABLE Customers (
    CustomerID INT IDENTITY(1,1) PRIMARY KEY, -- معرف فريد لكل عميل
    FullName NVARCHAR(100) NOT NULL,           -- الاسم الكامل
    Email NVARCHAR(100) UNIQUE NOT NULL,       -- البريد الإلكتروني (فريد)
    Phone NVARCHAR(15) NOT NULL,               -- رقم الهاتف
    Address NVARCHAR(200) NOT NULL             -- العنوان
);
CREATE TABLE Rentals (
    RentalID INT IDENTITY(1,1) PRIMARY KEY,  -- معرف فريد لكل إيجار
    CustomerID INT NOT NULL,                  -- معرف العميل (FK)
    CarID INT NOT NULL,                       -- معرف السيارة (FK)
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    TotalPrice DECIMAL(10, 2),
    Status NVARCHAR(20) DEFAULT 'Active',
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (CarID) REFERENCES Cars(CarID)
);
SELECT * FROM INFORMATION_SCHEMA.TABLES;



