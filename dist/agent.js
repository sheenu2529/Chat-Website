// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("#addAgentForm");
//   const cancelBtn = document.querySelector("#cancelAddAgentBtn");

//   if (form) {
//     form.addEventListener("submit", (event) => {
//       event.preventDefault();

//       const formData = new FormData(form);
//       const agentData = {
//         email: formData.get("email"),
//         firstName: formData.get("firstname"),
//         lastName: formData.get("lastname"),
//         password: formData.get("password"),
//         role: formData.get("role"),
//       };

//       // Retrieve current agents from local storage
//       let agents = JSON.parse(localStorage.getItem("agents")) || [];
//       agents.push(agentData);
//       localStorage.setItem("agents", JSON.stringify(agents));

//       // Display success message
//       const successMessage = document.createElement("p");
//       successMessage.textContent = "Agent added successfully!";
//       successMessage.style.color = "green";
//       form.appendChild(successMessage);

//       // Redirect to admin page after a short delay
//       setTimeout(() => {
//         window.location.href = "admin.html";
//       }, 2000);
//     });
//   }

//   if (cancelBtn) {
//     cancelBtn.addEventListener("click", () => {
//       window.location.href = "admin.html";
//     });
//   }

//   // Code for displaying agents in the admin page
//   const agentsTableBody = document.getElementById("agentsTableBody");

//   if (agentsTableBody) {
//     const agents = JSON.parse(localStorage.getItem("agents")) || [];

//     // Function to create a table row for an agent
//     function createAgentRow(agent) {
//       const row = document.createElement("tr");
//       row.classList.add("border-b", "even:bg-[#FFFFFF]", "odd:bg-[#F2F4F5]");

//       row.innerHTML = `
//         <td class="px-6 py-2">${agent.firstName} ${agent.lastName}</td>
//         <td class="px-6 py-2">${agent.email}</td>
//         <td class="px-6 py-2">${agent.role}</td>
//         <td class="px-6 py-2">
//           <button class="text-blue-600 hover:underline">
//             <a href="./edit.html">Edit</a>
//           </button>
//         </td>
//       `;

//       return row;
//     }

//     agents.forEach(agent => {
//       const agentRow = createAgentRow(agent);
//       agentsTableBody.appendChild(agentRow);
//     });
//   }
// });

// agent.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addAgentForm');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            email: formData.get('email'),
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            password: formData.get('password'),
            role: formData.get('role'),
        };

        // Retrieve the token from wherever it's stored
        const token = localStorage.getItem('token'); // Example of getting the token from local storage

        try {
            const response = await fetch('http://127.0.0.1:8000/api/add/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Include the token in the request headers
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message || 'Agent added successfully!');
            } else {
                alert(result.error || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });

    document.getElementById('cancelAddAgentBtn').addEventListener('click', function() {
        form.reset();
    });
});


