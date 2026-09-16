const fs = require("fs");

// Create uploads folder
fs.mkdir("uploads", { recursive: true }, (err) => {
    if (err) {
        console.log("Error creating folder:", err);
        return;
    }

    console.log("uploads folder created.");

    // Create 3 empty files
    fs.writeFile("uploads/file1.txt", "", (err) => {
        if (err) console.log(err);
    });

    fs.writeFile("uploads/file2.txt", "", (err) => {
        if (err) console.log(err);
    });

    fs.writeFile("uploads/file3.txt", "", (err) => {
        if (err) console.log(err);
    });

    // List files after creation
    setTimeout(() => {
        fs.readdir("uploads", (err, files) => {
            if (err) {
                console.log("Error reading folder:", err);
                return;
            }

            console.log("Files in uploads folder:");
            console.log(files);

            // Delete one file
            fs.unlink("uploads/file3.txt", (err) => {
                if (err) {
                    console.log("Error deleting file:", err);
                    return;
                }

                console.log("file3.txt deleted.");
            });
        });
    }, 100);
});