public class ToppingDecorator implements Notificaciones {

    protected Notificaciones correoInstitucional;
    public ToppingDecorator(Notificaciones correoInstitucional) {
        this.correoInstitucional = correoInstitucional;
    }


    @Override
    public String enviarnotificacionclase() {
        {
            return correoInstitucional.enviarnotificacionclase();

        }


    }

    @Override
    public double enviarnotificacioncalificacion() {

        correoInstitucional.enviarnotificacioncalificacion();
        System.out.println("Estimado estudiante, tienes una nueva actualización en las notas del curso algebra lineal-actividad 3");
        return 4.5;
    }

    @Override
    public String envarnotificacionforo() {
        return correoInstitucional.envarnotificacionforo();

    }
}
