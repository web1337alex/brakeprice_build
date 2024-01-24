<?php
class MapexYandexInputRender extends modTemplateVarInputRender {
    public function getTemplate() {
        return $this->modx->getOption('core_path').'components/mapex/tv/input/tpl/mapex.yandex.tpl';
    }
    public function process($value,array $params = array()) {
 
    }
}
return 'MapexYandexInputRender';