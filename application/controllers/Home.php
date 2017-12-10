<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		$data['Title'] = "Home";
		$this->load->view('vista_principal/index',$data);
		$this->load->view('vista_principal/nav');
		$this->load->view('vista_principal/billetera');
		$this->load->view('vista_principal/footer');
	}

}

/* End of file Home.php */
/* Location: ./application/controllers/Home.php */