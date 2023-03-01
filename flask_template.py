from flask import Flask,render_template
import flask
import sqlite3


def get_db_connection():
	conn=sqlite3.connect('ours.db')
	conn.row_factory=sqlite3.Row
	return conn

app= Flask(__name__,template_folder='templateFiles',static_folder='staticFiles')
@app.route('/')

def index():
	conn=get_db_connection()
	cursor=conn.execute('SELECT * FROM fish WHERE id=3')
	#conn.close()
	return render_template('dash.html', items=cursor.fetchall())
if __name__=='__main__':
	app.run(debug=True)
	
