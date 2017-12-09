<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario extends CI_Model {


	/* Funcion para Verificar el password de un cliente y activar el inicio de sesión
	*
	*/
	function ingresarLogin()
		{
			$sql = $this->db->select('*')->where('clave',$this->input->post('clave'))->where('correo',$this->input->post('correo'))->get('usuario')->result();
			if ($sql->num_rows() > 0) {
				return $sql;
			}else{
				return FALSE;
			}
		}
	function registrarUsuario()
	{
		$data = array(
				'nombre' => $this->input->post('nombre'),
				'apellido' => $this->input->post('apellido'),
				'correo'   => $this->input->post('correo'),
				'fecha_nacimiento' => $this->input->post('fecha_nacimiento') ;
				'telefono' => $this->input->post('telefono');
				'clave'		=> $this->input->post('clave');
				'credencial' => $this->input->post('credencial');
			);

		$sql = $this->db->insert('usuario', $data);
		if ($sql) {
			return TRUE;
		}else{
			return FALSE;
		}
	}
	function recordarClave()
	{
		
	}


}

/* End of file Usuario.php */
/* Location: ./application/models/Usuario.php */