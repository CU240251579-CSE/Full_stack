const http = require('http');
const url = require('url');

const students = [
    {
        id: 1,
        name: 'Rahul',
        rollNo: '101',
        course: 'CSE'
    },
    {
        id: 2,
        name: 'Priya',
        rollNo: '102',
        course: 'CSE'
    },
    {
        id: 3,
        name: 'Aman',
        rollNo: '103',
        course: 'CSE'
    }
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // GET /
    if (req.method === 'GET' && pathname === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Welcome to the Student API');
    }

    // GET /students
    else if (req.method === 'GET' && pathname === '/students') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(students));
    }

    // GET /students/:id
    else if (
        req.method === 'GET' &&
        pathname.startsWith('/students/')
    ) {
        const id = parseInt(pathname.split('/')[2]);

        const student = students.find(
            student => student.id === id
        );

        if (student) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(student));
        } else {
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                error: 'Student not found'
            }));
        }
    }

    // GET /search?keyword=node
    else if (req.method === 'GET' && pathname === '/search') {
        const keyword = parsedUrl.query.keyword;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end(`You searched for: ${keyword || ''}`);
    }

    // Other routes
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The requested route does not exist.</p>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});