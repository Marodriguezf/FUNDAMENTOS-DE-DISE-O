public class Sistema {
    public static void main(String[] args) {
        Correo correo = new Correo();
        correo.enviarnotificacionclase();
        correo.enviarnotificacioncalificacion();
        correo.envarnotificacionforo();


        Moodle moodle = new Moodle();
        moodle.enviarnotificacionclase();
        moodle.enviarnotificacioncalificacion();
        moodle.envarnotificacionforo();


    }
}
