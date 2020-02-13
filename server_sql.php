<?php
/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * Server SQL executor
 *
 * @package PhpMyAdmin
 */
declare(strict_types=1);

use PhpMyAdmin\Controllers\Server\SqlController;
use PhpMyAdmin\DatabaseInterface;
use PhpMyAdmin\Response;
use PhpMyAdmin\SqlQueryForm;

if (! defined('ROOT_PATH')) {
    define('ROOT_PATH', __DIR__ . DIRECTORY_SEPARATOR);
}

require_once ROOT_PATH . 'libraries/common.inc.php';

/** @var Response $response */
$response = $containerBuilder->get(Response::class);

/** @var DatabaseInterface $dbi */
$dbi = $containerBuilder->get(DatabaseInterface::class);

/** @var SqlController $controller */
$controller = $containerBuilder->get(SqlController::class);

/** @var SqlQueryForm $sqlQueryForm */
$sqlQueryForm = $containerBuilder->get('sql_query_form');

$header = $response->getHeader();
$scripts = $header->getScripts();
$scripts->addFile('makegrid.js');
$scripts->addFile('vendor/jquery/jquery.uitablefilter.js');
$scripts->addFile('sql.js');

$response->addHTML($controller->index($sqlQueryForm));
//$response->addHTML("COUCOU AJAX");

// TODO deplacer tag script dans header
$jsProfesseurVirtuel = '<script data-cfasync="false" type="text/javascript" src="js/professeur-virtuel.js"></script>';
// TODO deplacer event dans le js
$boutonProfesseurVirtuel = '<form onsubmit="demanderRetroaction()"><input type="submit" value="Demander une rétroaction"></form>'; 
$fenetreProfesseurVirtuel = '<div id="zone-professeur-virtuel"></div>';
$response->addHTML($jsProfesseurVirtuel);
$response->addHTML($boutonProfesseurVirtuel);
$response->addHTML($fenetreProfesseurVirtuel);
