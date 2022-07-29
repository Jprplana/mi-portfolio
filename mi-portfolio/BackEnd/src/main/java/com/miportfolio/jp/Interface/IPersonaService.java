package com.miportfolio.jp.Interface;

import com.miportfolio.jp.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar un usuario buscando por Id
    public void deletePersona(Integer id);
    
    //Buscar una persona por Id
    public Persona findPersona(Integer id);
}
