const express = require('express')
const { db, storage } = require('./firebaseconfig')
const app = express()
app.set('view engine', 'ejs');
var pdfcrowd = require("pdfcrowd");
const path = require('path');
const cors = require('cors');
const fs = require('fs');

app.use(cors())
var client = new pdfcrowd.HtmlToPdfClient("nisabmohd01", "412b90f07a361e8265a7ea739734ff28");

app.get('/:id&:template', async (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    resumeid = req.params.id;
    let resumedata;
    var docRef = db.collection("resumes").doc(resumeid);
    docRef.get().then((doc) => {
        if (doc.exists) {
            resumedata = JSON.parse(doc.data().resumedata)
            console.log(resumedata);
            if (req.params.template == 1)
                res.render('template1', {
                    name: resumedata
                })
            else if (req.params.template == 2)
                res.render('template2', {
                    name: resumedata
                })
            client.convertUrlToFile(
                `${fullUrl}`,
                `${resumeid}.pdf`,
                function (err, fileName) {
                    if (err) return console.error("Pdfcrowd Error: " + err);
                    console.log("Success: the file was created " + fileName);
                });
        }
    }).catch((error) => {
        console.log(error);
    });


})

app.get('/download/:id&:template', (req, res) => {
    id = req.params.id;
    try {
        let filePath = path.join(__dirname, `${id}.pdf`);
        res.download(filePath);
    }
    catch (err) {
        req.send("err")
    }
})


app.get('/json/:id&:template', (req, res) => {
    resumeid = req.params.id;
    var docRef = db.collection("resumes").doc(resumeid);
    docRef.get().then((doc) => {
        if (doc.exists) {
            resumedata = doc.data().resumedata
            fs.writeFileSync(`./${resumeid}.json`, resumedata)
            let filePath = path.join(__dirname, `${resumeid}.json`);
            res.download(filePath)
        }
    }).catch((error) => {
        console.log(error);
        res.send("error")
    });

})

app.listen(5000, () => {
    console.log(`listening on port 5000`);
})