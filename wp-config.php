<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fpgVc+^92{oa.Kp)NM#Jrkw$.8vY38L$fadwS2W,^gy_d0DX*]j#64Q<0v$l-I%2' );
define( 'SECURE_AUTH_KEY',  '0l^$9nV8w)VLl[=D}oZv&G~4L%h8_H@kT??F*9k|g/]*F9s_kI,X=6ar}-edDy8d' );
define( 'LOGGED_IN_KEY',    'v>Pp^>kw~,/7C|(Y<;De`N`p1vA8<H393,iUxKTUP4`|4r--BT+~q).x@}h;nHqK' );
define( 'NONCE_KEY',        ' AUpeJ&<z?XqW=d1u<bz(l1k*W0VGrK],:<@{lQx%(xuz. LA:|MFP>!D7S{q7B.' );
define( 'AUTH_SALT',        'qbf$<x(lSiEYR!||/il@k(GK4bW*S%$C40*7}R_pIbKIa;xD2EzS|4tQTt|}]4P0' );
define( 'SECURE_AUTH_SALT', ',O7MDlWTXvBSja[Of?,Ym!HIlFVBV_hhQEtb3. Qb-^MNJmmI&+O0Ox;?9.Xf-vD' );
define( 'LOGGED_IN_SALT',   '_3)4GY4K*J[pP,KQjW~V5C=To?g~}8q~Wr@8DLNj_bWq7b^YhuYo&s|FJ.zY[Y?l' );
define( 'NONCE_SALT',       'Mj2N`}lEazui:l6+WS8*3v3nb8Q`V^Wr79G8xYg[@bev0Zfj%I(xwlhhfH,-AURK' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
