public class Correo implements Notificaciones {


    @Override
    public String enviarnotificacionclase() {

        System.out.println("Recuerda que tienes 3 clases programadas para el dia de hoy");
        return ("fundamentos de diseño - 6:00 pm");

    }

    @Override
    public double enviarnotificacioncalificacion() {

        System.out.println("Tienes nuevas actualizaciónes en tus notas de curso - Algebra lineal");

        return 4.5;
    }

    @Override
    public String envarnotificacionforo() {

        System.out.println("Tienes un nuevo comentario en tu entrada - presentación-");
        return ("acompañamiento permanente");

    }
}
