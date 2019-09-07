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

SELECT *
FROM MATERIALS

SELECT *
FROM INGREDIENTS
WHERE M_ID='CF001'

SELECT SUM(BD_COUNT) AS TONG
FROM BILL_DETAILS
WHERE M_ID='CF001'

SELECT SUM(BD.BD_COUNT)-- SO LUONG XUAT 1 LOAI NGUYEN LIEU(CHUA TINH NGUYEN LIEU HUY)
FROM INGREDIENTS I
	JOIN BILL_DETAILS BD ON BD.M_ID=I.M_ID
WHERE I.MA_ID='MACF001'
