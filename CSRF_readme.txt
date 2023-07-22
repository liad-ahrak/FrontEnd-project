to run the attack you need to do this steps:
1. run the website 
2. sign in to user => email: q , password: q
3. open cmd and make sure to copy the file "attackData.json" to directory that you work on with the cmd
4. get the cookie tokenLogin, by pressing inspect on the website and then go to the tab Application
5. run this script on the cmd but change the XXXX to the token that you find out:

    curl -X POST -H "Content-Type: application/json" -H "Cookie: tokenLogin=XXXX"  --data "@attackData.json" "http://localhost:3000/api/post"

6. make sure to modify the link to correct local host
7. and if you want to attack other users make sure to modify the attackData file so the proper email will be there