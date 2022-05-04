const express = require('express')
const db = require('./firebaseconfig')
const app = express()
app.get('/:id', (req, res) => {
    resumeid = req.params.id;
    console.log(resumeid);
    let resumedata;
    var docRef = db.collection("resumes").doc(resumeid);
    docRef.get().then((doc) => {
        if (doc.exists) {
            resumedata=JSON.parse(doc.data().resumedata)
            console.log(resumedata.sections.awards);
        }
    }).catch((error) => {
        console.log(error);
    });
    res.end("jhjg")

})

app.listen(5000, () => {
    console.log(`listening on port 5000`);
})