<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'italiawpterroawp');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'luisfsdbi');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'luisreal4523');

/** Nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'IFNX%!7m)wg&7H@z4yWaEHdn EvYRM::.QOM=+9<K6TF_zs5X5#w_8*JzidPXs[1');
define('SECURE_AUTH_KEY',  'v@SV#VSP[TIZBR80x$-lod(g*MgA|pb%Mv2^DPV?Ug0)Ti)QY~UE)mwN!!h+R}*%');
define('LOGGED_IN_KEY',    '*=Lrlz0}2g1RTmzK=&n)7RtN>&06_25[JR!( y!yPTJ@wk=]-W<w5~PM2 Zdx=wX');
define('NONCE_KEY',        'qIA8 E d`6};cv,`a2;#g!P {cL=KZ@+DKOBo<*GFAOjo=n{=O/pf:Y0<bQ+jV]D');
define('AUTH_SALT',        '.(~tK0E5 ep,#Bnw7H9q`dB 6Q5sB~CW9++y<Wxx@g6$q+!5#Cu=wFEu9[!~~o$d');
define('SECURE_AUTH_SALT', '|hSsIEgOfji SL@o#}/+LQ&)~&^=hm:Ay5R!W|ne!]yO./M38@<Z_o/&BZ:MliWV');
define('LOGGED_IN_SALT',   'lNCS-=vE,[?;w*r/.dq;H7WG.-}v p |nz;dLy$2Sk}vI:,MK!1fMJq[@JEKNL.#');
define('NONCE_SALT',       '|<W5H;NRy[ty%dFw}r}e4Y2]Gaz_[3lP[S.8Yn:rDq*Eu-11pK3@O%OM0DK-v`2x');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix  = 'italywpitcity_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
