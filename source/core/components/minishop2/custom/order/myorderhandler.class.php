<?
class myOrderHandler extends msOrderHandler{	
	public function submit($data = array()) {
		if(empty($data['email'])){
			$data['email'] = uniqid('user_').'@MYSITE.ru';
		}
		return parent::submit($data);
	}
}