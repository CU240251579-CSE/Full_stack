const fs = require("fs");

fs.writeFile(
    "student.txt",
    "Name: Suraj Singh\nRoll Number: 59",
    (err) => {
        if (err) {
            console.log("Error:", err);
            return;
        }

        console.log("student.txt created and data written.");

        fs.appendFile(
            "student.txt",
            "\nCourse: Full Stack Web Development",
            (err) => {
                if (err) {
                    console.log("Error:", err);
                    return;
                }

                console.log("Course name appended.");

                fs.readFile("student.txt", "utf8", (err, data) => {
                    if (err) {
                        console.log("Error:", err);
                        return;
                    }

                    console.log("\nFile Content:");
                    console.log(data);

                    fs.rename("student.txt", "profile.txt", (err) => {
                        if (err) {
                            console.log("Error:", err);
                            return;
                        }

                        console.log(
                            "\nFile renamed from student.txt to profile.txt."
                        );
                    });
                });
            }
        );
    }
);