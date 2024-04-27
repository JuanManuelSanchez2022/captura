function genPDF(){
    var doc=new jsPDF();
    let text_1=document.getElementById('text_capture').value;
    let text_2=document.getElementById('default').value;
    doc.text(20,20,text_1,text_2);
    doc.addPage();
    doc.text(20,20,'Mi trabajo!!');
    doc.save('Test.pdf');
}

console.log(text_1,text_2);

