-- SO BILL -> SO TIEN
SELECT B_Payment
FROM BILLS
WHERE B_ID=2

--SO BILL ->TEN MON, SL BAN DUOC
SELECT M.M_Name, BD.BD_Count
FROM BILLS B
	JOIN BILL_DETAILS BD ON B.B_ID=BD.B_ID
	JOIN MENU M ON BD.M_ID=M.M_ID
WHERE B.B_ID=2

--SO BILL -> NHAN VIEN TAO HOA DON
SELECT B.B_ID,E.E_Name
FROM BILLS B 
	JOIN EMPLOYEES E ON B.E_ID=E.E_ID
ORDER BY B.B_ID

--SO LUONG NGUYEN LIEU DA XUAT-- CHUA LAM DUOC
SELECT BD.M_ID, BD.BD_Count
FROM BILL_DETAILS BD
	JOIN INGREDIENTS I ON I.M_ID=BD.M_ID
	JOIN MATERIALS M ON M.MA_ID=I.MA_ID
ORDER BY BD.M_ID