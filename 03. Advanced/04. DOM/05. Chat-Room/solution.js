function solve() {
   document.getElementById("send").addEventListener("click", onClick);

   function onClick() {
      let input = document.getElementById("chat_input").value;
      let chatMessagesDiv = document.getElementById("chat_messages");
      let newMessageNode = document.getElementsByClassName("message my-message")[0].cloneNode();

      if (input) {
         newMessageNode.textContent = input;
         chatMessagesDiv.appendChild(newMessageNode);
         document.getElementById("chat_input").value = "";
         
      } else {
         return
      }
   }
}


