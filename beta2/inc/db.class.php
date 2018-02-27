<?php
require_once __DIR__ . '/config.php';
class Database{
    private $db;
    public function __construct()
    {
        $this->db = new MysqliDb (HOST,USER,PASSWORD,DATABASE);
    }
     public function insertaClausula($fbid, $name, $firstname, $lastname, $email, $clausula){
        $ok = false;
        $data = Array ("fbid" => $fbid,
                 "name" => $name,
                 "first_name" => $firstname,
                 "last_name" => $lastname,
                 "email" => $email,
                 "clausula" => $clausula, "fecha" => date("Y-m-d h:i:sa")
                 );


          $id = $this->db->insert ('clausulas', $data);
          if($id){
               return $id;
          } else {
              echo 'insert failed: ' . $this->db->getLastError(); die;
          }
      }
      public function existeEmail($email) {
             $ents = $this->db->rawQueryOne('select * from participaciones where email=?', Array($email));
             if(!empty($ents)){
                 return true;
             } else {
                 return false;
             }
      }
      public function existeFbid($fbid) {
             $ents = $this->db->rawQueryOne('select * from participaciones where fbid=?', Array($fbid));
             if(!empty($ents)){
                 return true;
             } else {
                 return false;
             }
      }
      public function getClausulas($pag){
            $this->db->orderBy("id","desc");
            $this->db->page = $pag;
            // set page limit to 2 results per page. 20 by default
            $this->db->pageLimit = 6;
            //$this->db->where("estado", 2);
             $ciudades = $this->db->paginate('clausulas', $pag );
  //  print_r($this->db->getLastQuery()); die;
             $ciudades[0]['total']=$this->db->totalPages;
             return $ciudades;
          }
      public function getBuscarParticipaciones($txt){
                $this->db->orderBy("id","desc");
                $this->db->where("estado", 2);
                $this->db->where('nombre LIKE ?', array("%".$txt."%"));
                $this->db->orWhere('apellidos LIKE ?', array("%".$txt."%"));
                $this->db->page = 1;
                  // set page limit to 2 results per page. 20 by default
                $this->db->pageLimit = 6;
                $ciudades = $this->db->paginate('participaciones',1);
                if($this->db->count > 0) $ciudades[0]['total']=$this->db->totalPages;
              //  print_r($this->db->getLastQuery()); die;
                 return $ciudades;
              }

    public function hayGafasJake() {
        $this->db->where("premio", "gafas_jake");
        $this->db->get("participaciones");
        if($this->db->count == 95) {
                mail('david.alvarez@tbwa.com, rebeca.garrobo@tbwa.com, diana.benito@tbwa.com','HORA DE AVENTURAS APP', 'Se han entregado 95 gafas jake');
        }
        if($this->db->count < JAKE) {
          return 1;
        } else {
          return 0;
        }
    }

    public function hayGafasPrincesa() {
        $this->db->where("premio", "gafas_princesa");
        $this->db->get("participaciones");
        if($this->db->count == 50) {
                mail('david.alvarez@tbwa.com, rebeca.garrobo@tbwa.com, diana.benito@tbwa.com','HORA DE AVENTURAS APP', 'Se han entregado 50 gafas Princesa');
        }
        if($this->db->count < PRINCESA) {
          return 1;
        } else {
          return 0;
        }
    }
    public function hayPackLibros() {

        $this->db->where("premio", "pack_libros");
        $this->db->get("participaciones");
        if($this->db->count == 50) {
                mail('david.alvarez@tbwa.com, rebeca.garrobo@tbwa.com, ','HORA DE AVENTURAS APP', 'Se han entregado 100 pack de libros');
        }
        if($this->db->count < LIBROS) {
          return 1;
        } else {
          return 0;
        }
    }
}
