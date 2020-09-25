const jsonwebtoken = require('jsonwebtoken') ;
const crypto = require('crypto') ;
const user = {
    id:crypto.randomBytes(10).toString("hex")
}
const token = jsonwebtoken.sign(user,'2313123',{expiresIn:'1s'});
const v = jsonwebtoken.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZjYzBkMmYyZDYyY2U5ZDhmMzkyIiwiaWF0IjoxNjAwNzkyNzE3LCJleHAiOjE2MDA3OTI3MTh9.abtX8zdeyfjxUJZQGxlCKWvmyZmzBaK1wqtFOAn4GF8','2313123')

