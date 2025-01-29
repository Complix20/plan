document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', function() {
        const opcion = this.id;
        const resultado = document.getElementById('resultado');
        const imagen = document.getElementById('option-image');
        const optionsContainer = document.querySelector('.options-container');
        
        // Ocultar opciones
        optionsContainer.style.opacity = '0';
        setTimeout(() => {
            optionsContainer.style.display = 'none';
        }, 500);
        
        // Mostrar resultados
        resultado.style.display = 'block';
        imagen.style.display = 'block';

        // Configurar contenido
        const mensajes = {
            cocinar: {
                texto: "¡Perfecto! 🧑🍳 ¿Qué prefieres preparar? ¡Podemos hacer pasta, pizza o algo nuevo juntos!",
                imagen: "images/catchef.jpg",
                whatsapp: "¡Gracias por escoger cocinar juntos! 🧑🍳 ¿Qué prefieres preparar?"
            },
            pelicula: {
                texto: "🎉 ¡Excelente elección! ¿Qué género te apetece? Podemos ver romántica, comedia o hasta terror si te animas 😼🍿",
                imagen: "images/gatocine.jpg",
                whatsapp: "¡Gracias por escoger ver una película! 🎥 ¿Qué género prefieres?"
            },
            pasear: {
                texto: "🌅 Será una bonita noche juntos. ¿Te gustaría ir al parque, mirador o explorar algún lugar nuevo?",
                imagen: "images/paseogato.jpg",
                whatsapp: "¡Gracias por escoger pasear! 🌅 ¿A dónde te gustaría ir?"
            }
        };

        resultado.innerHTML = mensajes[opcion].texto;
        imagen.src = mensajes[opcion].imagen;
        
        // Crear botón para notificar por WhatsApp
        const whatsappBtn = document.createElement('button');
        whatsappBtn.className = 'option-btn';
        whatsappBtn.innerHTML = '📲 Notificar por WhatsApp';
        whatsappBtn.style.background = 'linear-gradient(45deg, #4dabf7, #69c6ff)';
        whatsappBtn.style.margin = '20px auto'; // Centrar el botón
        whatsappBtn.style.display = 'block'; // Asegurar que sea un bloque
        // Insertar el botón después de la imagen
        imagen.insertAdjacentElement('afterend', whatsappBtn);

        // Configurar enlace de WhatsApp
        whatsappBtn.onclick = () => {
            const mensajeWhatsApp = encodeURIComponent(mensajes[opcion].whatsapp);
            const enlaceWhatsApp = `https://wa.me/51998901680?text=${mensajeWhatsApp}`;
            window.open(enlaceWhatsApp, '_blank');
        };

        // Crear botón para volver a elegir
        const volverBtn = document.createElement('button');
        volverBtn.className = 'option-btn';
        volverBtn.id = 'volver';
        volverBtn.innerHTML = '🔄 Elegir otra opción';
        volverBtn.style.background = 'linear-gradient(45deg, #f53699, #ff6b6b)';
        volverBtn.style.margin = '20px auto'; // Centrar el botón
        volverBtn.style.display = 'block'; // Asegurar que sea un bloque
        volverBtn.style.cssText = 'background: linear-gradient(45deg, #f53699, #ff6b6b); margin: 20px auto; display: block; text-align: center;';
        // Insertar el botón después de la imagen
        imagen.insertAdjacentElement('afterend', volverBtn);
        
        volverBtn.onclick = () => {
            resultado.style.display = 'none';
            imagen.style.display = 'none';
            optionsContainer.style.display = 'flex';
            setTimeout(() => {
                optionsContainer.style.opacity = '1';
            }, 50);
            volverBtn.remove();
            whatsappBtn.remove();
        };

        // Efecto confeti mejorado
        if (window.confetti) {
            confetti({
                particleCount: 80,
                spread: 60,
                origin: { y: 0.6 },
                colors: ['#ff6b6b', '#4dabf7', '#69db7c']
            });
        }
    });
});
