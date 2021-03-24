public class Moodle implements Notificaciones {



    @Override
    public String enviarnotificacionclase() {

        System.out.println("Recuerda que tienes programada la clase de:");

        return ("fundamentos de diseño - 6:00 pm");
    }

    @Override
    public double enviarnotificacioncalificacion() {

        System.out.println("Tienes una nueva calificación para la actividad 3 - Modulo 2- Fundamentos de diseño");
        return 4.5;
    }

    @Override
    public String envarnotificacionforo() {

        System.out.println("Tienes una nueva respuesta a tu comentario en el foro:");

        return ("acompañamiento permanente");

    }
}
