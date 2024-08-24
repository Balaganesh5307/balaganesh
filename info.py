import pyodbc
con=('Driver={SQL Server};' 'Server=.;' 'Database=master;' 'Trusted_connection=yes;')
conn=pyodbc.connect(con)
cursor=conn.cursor()
print("creating a new table")
print("=======================")
qry="create table information(Id integer identity,Username varchar(20),Email varchar(30),Phonenumber integer)"
try:
    cursor.execute(qry)
    conn.commit()
    print("table success")
except Exception as e:
    print("table error:",e)
qry="insert into information values('bala','abc@abc.com',1234567890)"
try:
    cursor.execute(qry)
    conn.commit()
    conn.close()
    print("user info has saved")
except Exception as e:
    print("error in table insertion",e)
