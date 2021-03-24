public class MensajeriaInterna extends ToppingDecorator {
    public MensajeriaInterna(Notificaciones correoInstitucional) {
        super(correoInstitucional);
        System.out.println("Has recibido un nuevo mensaje");
    }

       @Override
       public String enviarnotificacionclase() {
           {

               return ("Recuerda que tienes clase de fundamentos de diseño hoy 6:00 pm");
           }


       }

       @Override
       public double enviarnotificacioncalificacion() {

           correoInstitucional.enviarnotificacioncalificacion();
           System.out.println("Tienes una nueva calificación para la actividad 3 - Modulo 2- Fundamentos de diseño");
           return 0;
       }

       @Override
       public String envarnotificacionforo() {

           return ("Tienes una nueva respuesta a tu comentario en el foro de acompañamiento permanente");

       }
   }
