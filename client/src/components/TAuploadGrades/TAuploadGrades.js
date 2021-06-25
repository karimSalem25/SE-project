function gradingStudents(grades){
    for(let i = 0; i < grades.length; i++){
        if((grades[i] >= 38) && ((((grades[i] % 5) == 3) || ((grades[i] % 5) == 4)))) {
            grades[i] = grades[i] + (5 - (grades[i] % 5));
        }
    }
    return grades;
}

function main(){
    const ws = fs.createWriteStream(proccess.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(),10);

    let grades = [];

    for(let i = 0; i < gradesCount; i++){
        const gradesItem = parseInt(readLine().trim(),10);
        grades.push(gradesItem);
    }
    const result = gradingStudents(grades);
    ws.write(result.join('\n') + '\n');
}