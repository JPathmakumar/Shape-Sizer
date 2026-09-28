
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let selectedShape = "";

// Choose a rectangle
function chooseRectangle() {
    selectedShape = "rectangle";
    updateSelectedShape();
}

// Choose a circle
function chooseCircle() {
    selectedShape = "circle";
    updateSelectedShape();
}

// Choose a triangle
function chooseTriangle() {
    selectedShape = "triangle";
    updateSelectedShape();
}

// Update the selected shape text
function updateSelectedShape() {
    document.getElementById("selectedShape").textContent =
        "Selected Shape: " + selectedShape;

    document.getElementById("message").textContent = "";
}

// Draw the selected shape
function drawShape() {
    const width = Number(document.getElementById("width").value);
    const height = Number(document.getElementById("height").value);
    const message = document.getElementById("message");

    if (selectedShape === "") {
        message.textContent = "Please choose a shape first!";
        return;
    }

    if (width <= 0 || height <= 0) {
        message.textContent = "Please enter a width and height greater than 0.";
        return;
    }

    if (!Number.isFinite(width) || !Number.isFinite(height)) {
        message.textContent = "Please enter valid numbers.";
        return;
    }

    if (width > canvas.width || height > canvas.height) {
        message.textContent = "Please use dimensions no larger than 400.";
        return;
    }

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Center the shape
    const x = (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;

    ctx.fillStyle = "dodgerblue";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    if (selectedShape === "rectangle") {
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
    }

    else if (selectedShape === "circle") {
        // Width and height determine the oval's diameter
        ctx.beginPath();
        ctx.ellipse(
            canvas.width / 2,
            canvas.height / 2,
            width / 2,
            height / 2,
            0,
            0,
            Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();
    }

    else if (selectedShape === "triangle") {
        // Width is the base and height is the vertical height
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x + width, y + height);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    message.textContent =
        "Your " + selectedShape + " is " + width + " × " + height + " pixels.";
}