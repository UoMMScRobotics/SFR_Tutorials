Search.setIndex({"docnames": ["contents", "index", "week09_ca", "week10_tut_commands", "week10_tut_conclusion", "week10_tut_controller", "week10_tut_costmap", "week10_tut_intro", "week10_tut_pathplan"], "filenames": ["contents.rst", "index.rst", "week09_ca.rst", "week10_tut_commands.rst", "week10_tut_conclusion.rst", "week10_tut_controller.rst", "week10_tut_costmap.rst", "week10_tut_intro.rst", "week10_tut_pathplan.rst"], "titles": ["Contents", "Software for Robotics Tutorials", "Week 09 - Saving a Map", "Sending Goals to the Robot Navigation Stack", "Conclusion", "Adding a Controller from Nav2", "How to Represent the World for Path Planning", "Autonomous Navigation Introduction", "Adding Path Planning from Nav2"], "terms": {"softwar": 0, "robot": [0, 4, 5, 7, 8], "autonom": [0, 3, 4], "navig": [0, 4, 5, 8], "introduct": 0, "ad": [0, 2, 4, 7], "path": [0, 2, 3, 4, 5, 7], "plan": [0, 3, 4, 7], "from": [0, 2, 7], "nav2": [0, 3, 7], "control": [0, 3, 4, 7, 8], "send": 0, "goal": [0, 4, 5, 7, 8], "stack": [0, 4, 8], "conclus": 0, "09": 0, "save": 0, "map": [0, 3, 4, 5, 7, 8], "step": [0, 3, 7], "1": [0, 3, 5, 6, 8], "make": [0, 3, 4, 7, 8], "packag": [0, 4, 5, 8], "2": [0, 3, 4, 5, 8], "start": [0, 3, 5, 7, 8], "simul": [0, 3, 4, 5, 7, 8], "3": [0, 5, 8], "slam": [0, 3, 4, 5, 7, 8], "4": [0, 5, 8], "drive": [0, 3, 5, 6, 7, 8], "around": [0, 3, 5, 7], "5": [0, 5, 6, 8], "previous": [1, 5, 6], "dr": 1, "murilo": [1, 2], "marinho": 1, "": [1, 2, 5, 8], "materi": [1, 2], "had": [1, 7], "form": 1, "backbon": 1, "cours": [1, 8], "howev": [1, 5, 8], "i": [1, 2, 3, 4, 5, 6, 7, 8], "still": 1, "much": [1, 3, 5], "ro": [1, 2, 3, 4, 5, 7, 8], "wilder": 1, "explor": 1, "These": [1, 3, 5, 7, 8], "ar": [1, 2, 3, 4, 5, 7, 8], "intend": 1, "provid": [1, 2, 3, 4, 5, 7, 8], "same": [1, 7], "feel": 1, "those": 1, "earlier": [1, 5, 8], "The": [2, 3, 4, 6, 7], "kei": [2, 7], "deliver": 2, "thi": [2, 3, 4, 5, 6, 8], "assess": 2, "deliv": 2, "gener": [2, 4, 5, 7, 8], "travers": 2, "an": [2, 3, 4, 5, 6, 7, 8], "environ": [2, 4, 7], "us": [2, 4, 5, 6, 7, 8], "There": [2, 3, 8], "few": 2, "we": [2, 3, 4, 5, 6, 7, 8], "must": [2, 5], "complet": 2, "order": [2, 8], "get": [2, 3, 5, 7], "build": [2, 5, 8], "ament_python": [2, 7], "begin": [2, 7], "imag": [2, 6, 8], "correspond": 2, "yaml": [2, 5, 7, 8], "file": [2, 7], "In": [2, 3, 5, 7, 8], "guid": [2, 5], "map_maker_pkg": 2, "name": [2, 5, 7, 8], "should": [2, 3, 5, 7, 8], "substitut": [2, 5, 7, 8], "your": [2, 3, 4, 5, 7, 8], "being": [2, 6], "gz_example_description_packag": [2, 7], "can": [2, 3, 4, 5, 7, 8], "download": [2, 4, 7], "copi": [2, 5, 7, 8], "here": [2, 5, 7, 8], "gz_example_robot_descript": [2, 5, 7, 8], "zip": [2, 4, 7], "both": [2, 4, 8], "submiss": 2, "which": [2, 3, 5, 6, 7, 8], "requir": [2, 4, 5, 8], "also": [2, 3, 5, 7, 8], "hold": [2, 3], "luanch": 2, "run": [2, 3, 4, 5, 8], "all": [2, 3, 5, 7, 8], "easier": [2, 3], "why": 2, "bother": 2, "launch": [2, 3, 7], "bring": 2, "lot": [2, 5], "termin": [2, 3], "session": 2, "biggest": 2, "conveni": 2, "abl": [2, 4], "declar": [2, 5, 7, 8], "node": [2, 3, 5, 7, 8], "use_sim_tim": [2, 5, 7, 8], "time": [2, 5], "gazebo": [2, 5, 7, 8], "rather": [2, 3, 5], "than": [2, 3, 5], "comput": [2, 5, 8], "local": 2, "clock": 2, "mean": [2, 6], "laser": 2, "scan": [2, 5, 8], "messag": [2, 3], "transform": [2, 7], "perform": [2, 3, 5, 8], "correctli": [2, 8], "If": [2, 4, 7, 8], "differ": [2, 5, 7], "thing": [2, 3, 5, 8], "veri": [2, 7], "quickli": [2, 7], "fall": 2, "down": 2, "usual": [2, 5, 6, 7, 8], "wai": [2, 7], "cd": [2, 7], "my_ros_w": [2, 7], "src": [2, 7], "ros2": [2, 3, 4, 7], "pkg": [2, 7], "creat": [2, 7], "type": [2, 4, 5, 7], "mkdir": [2, 7], "setup": [2, 5, 7, 8], "py": [2, 3, 5, 7, 8], "have": [2, 3, 4, 5, 6, 7, 8], "some": [2, 5, 6, 7], "extra": [2, 7], "line": [2, 5, 7, 8], "includ": [2, 5, 7, 8], "directori": [2, 5, 7, 8], "setuptool": [2, 7], "import": [2, 5, 7, 8], "o": [2, 7, 8], "glob": [2, 7], "package_nam": [2, 7], "version": [2, 4, 7], "0": [2, 3, 5, 6, 7, 8], "data_fil": [2, 7], "share": [2, 7], "ament_index": [2, 7], "resource_index": [2, 7], "resourc": [2, 7], "xml": [2, 7, 8], "join": [2, 7], "pxy": [2, 7], "yma": [2, 7], "ga": 2, "install_requir": [2, 7], "zip_saf": [2, 7], "true": [2, 5, 7, 8], "maintain": [2, 7], "maintainer_email": [2, 7], "email": 2, "org": 2, "descript": [2, 7], "todo": [2, 7], "licens": [2, 7], "tests_requir": [2, 7], "pytest": [2, 7], "entry_point": [2, 7], "console_script": [2, 7], "colcon": [2, 5, 7, 8], "sourc": [2, 5, 7, 8], "instal": [2, 5, 7, 8], "bash": [2, 5, 7, 8], "A": [2, 5, 7, 8], "ha": [2, 5], "been": [2, 6], "part": [2, 8], "synchron": 2, "tutori": [2, 4], "sim_robot": [2, 5, 7, 8], "joystick": 2, "gamepad": 2, "teleoper": 2, "would": [2, 3, 5, 7, 8], "good": 2, "place": [2, 3], "put": 2, "addit": [2, 4, 7, 8], "teleop_twist_keyboard": 2, "need": [2, 3, 4, 5, 7], "read": [2, 3, 4, 5], "keystrok": 2, "doe": [2, 6], "behav": [2, 4], "well": [2, 5, 8], "Its": 2, "separ": [2, 5], "simpl": [2, 8], "call": [2, 3, 5, 7, 8], "map_mak": 2, "look": [2, 5, 8], "someth": [2, 3], "like": [2, 3, 5, 6, 7, 8], "below": [2, 3, 5, 6, 7, 8], "ament_index_python": [2, 5, 7, 8], "get_package_share_directori": [2, 5, 7, 8], "launchdescript": [2, 5, 7, 8], "action": [2, 5, 7, 8], "includelaunchdescript": [2, 5, 7, 8], "launch_ro": [2, 5, 7, 8], "setparamet": [2, 5, 7, 8], "launch_description_sourc": [2, 5, 7, 8], "pythonlaunchdescriptionsourc": [2, 5, 7, 8], "def": [2, 5, 7, 8], "generate_launch_descript": [2, 5, 7, 8], "ld": [2, 5, 7, 8], "launch_gazebo": [2, 5, 7, 8], "launch_argu": [2, 5, 7, 8], "item": [2, 5, 7, 8], "add": [2, 5, 7, 8], "add_act": [2, 5, 7, 8], "valu": [2, 4, 5, 6, 7, 8], "return": [2, 3, 5, 7, 8], "anoth": 2, "next": 2, "As": [2, 5, 7], "saniti": 2, "check": [2, 4, 5, 7, 8], "follow": [2, 3, 4, 5, 7, 8], "ctrl": 2, "c": 2, "stop": 2, "onc": [2, 3, 5], "again": [2, 5], "trivial": 2, "By": [2, 5], "simpli": [2, 3, 6, 8], "our": [2, 4, 7, 8], "toolbox": [2, 5, 7, 8], "simultan": 2, "localis": [2, 4, 7], "one": 2, "standard": [2, 5, 7, 8], "launch_slamtoolbox": [2, 5, 7, 8], "slam_toolbox": [2, 5, 7, 8], "online_async_launch": [2, 5, 7, 8], "alwai": [2, 4], "work": [2, 5], "via": [2, 8], "menuselect": 2, "topic": [2, 3, 4, 5, 8], "adjust": [2, 4], "qualiti": 2, "servic": 2, "qo": 2, "set": [2, 5, 8], "match": [2, 5, 8], "easiest": 2, "open": [2, 3, 5, 8], "new": [2, 3, 7], "info": 2, "verbos": 2, "where": [2, 3, 5, 7, 8], "list": [2, 3, 5, 8], "expect": [2, 5, 7], "Be": 2, "care": 2, "output": [2, 5, 7, 8], "endpoint": 2, "publish": [2, 3], "know": [2, 5, 7], "more": [2, 3, 5, 7, 8], "about": [2, 5], "out": [2, 3, 8], "document": [2, 4, 5, 8], "video": 2, "2019": 2, "roscon": 2, "It": [2, 3, 5, 8], "recommend": [2, 5], "model": 2, "visualis": 2, "better": [2, 4], "sens": [2, 4, 7], "what": [2, 5, 7, 8], "go": [2, 3, 5, 7, 8], "haven": [2, 3], "t": [2, 3, 4, 6], "alreadi": [2, 3], "inclu": 2, "teleop": 2, "keyboard": 2, "manual": 2, "fill": 2, "could": [2, 8], "portion": [2, 5, 8], "stage": 2, "unnecessari": 2, "instead": 2, "everyth": [2, 3, 7, 8], "map_serv": 2, "map_saver_launch": 2, "nav2_map_serv": 2, "map_saver_serv": 2, "spawn": 2, "map_sav": 2, "save_map": 2, "nav2_msg": [2, 3], "srv": 2, "savemap": 2, "dure": 2, "detail": [2, 7, 8], "note": [2, 4, 8], "map_top": [2, 8], "default": [2, 5, 8], "map_url": 2, "map_nam": 2, "accept": 2, "full": [2, 5, 8], "home": 2, "usernam": 2, "image_format": 2, "pgm": 2, "greyscal": 2, "map_mod": 2, "trinari": [2, 6], "record": 2, "three": 2, "possibl": [2, 5, 6, 8], "state": [2, 4, 5, 7], "unknown": [2, 6, 8], "occupi": [2, 6], "free": 2, "space": [2, 5, 8], "colour": [2, 8], "free_thresh": 2, "25": [2, 5], "equal": 2, "treat": [2, 7], "move": [2, 5, 7, 8], "through": [2, 6, 8], "occupied_thresh": 2, "65": 2, "abov": 2, "obstacl": [2, 5, 7, 8], "yet": 2, "either": [2, 8], "rqt": [2, 3], "select": [2, 3, 8], "caller": 2, "plugin": [2, 3, 4, 5], "find": [2, 4, 8], "correct": 2, "command": [2, 3, 5, 7, 8], "entir": [2, 8], "tab": 2, "rest": [2, 7], "chang": [2, 3, 4], "desir": [2, 5, 7], "tada": 2, "request": [2, 8], "wa": [2, 3, 5], "success": 2, "associ": [2, 8], "metadata": 2, "ensur": [2, 3, 5, 8], "held": 2, "now": [3, 6, 7], "readi": 3, "you": [3, 4, 5, 7, 8], "nav_demo": [3, 5, 7, 8], "normal": [3, 7], "navigation_demo": [3, 4, 5, 7, 8], "backup": 3, "compute_path_through_pos": 3, "compute_path_to_pos": 3, "drive_on_head": 3, "follow_path": 3, "navigate_through_pos": 3, "navigate_to_pos": 3, "spin": 3, "wait": 3, "suppli": [3, 7, 8], "variou": [3, 8], "interdepend": 3, "between": [3, 7, 8], "exampl": [3, 4, 5, 7, 8], "user": 3, "navigation_to_pos": 3, "planner": [3, 4, 5], "bit": [3, 6], "tangl": 3, "mess": 3, "first": 3, "glanc": 3, "realiti": 3, "its": [3, 4, 8], "linear": 3, "appear": 3, "rqt_graph": 3, "whichev": 3, "comfort": 3, "top": 3, "left": [3, 7], "corner": 3, "total": 3, "overview": [3, 7], "connect": 3, "press": 3, "refresh": 3, "arrow": 3, "button": 3, "updat": [3, 5, 7, 8], "window": [3, 5, 8], "hover": 3, "over": [3, 5, 8], "oval": 3, "contain": [3, 7, 8], "planner_serv": [3, 5, 8], "green": 3, "_action": 3, "controller_serv": [3, 5], "similar": [3, 7, 8], "local_plan": 3, "most": [3, 5, 8], "importantli": 3, "cmd_vel": 3, "veloc": [3, 4, 5, 7, 8], "To": 3, "algorithm": [3, 5, 7, 8], "agent": [3, 7], "directli": 3, "emul": 3, "rviz": [3, 8], "visibl": [3, 8], "screen": [3, 5, 7, 8], "somewher": 3, "block": 3, "view": [3, 8], "send_goal": 3, "navigatetopos": 3, "header": 3, "stamp": 3, "sec": 3, "nanosec": 3, "frame_id": 3, "posit": [3, 7], "x": 3, "y": 3, "z": 3, "orient": 3, "w": [3, 5], "behavior_tre": 3, "hoorai": 3, "see": [3, 5], "forward": 3, "whilst": [3, 7, 8], "global": [3, 5, 7], "trajectori": 3, "attempt": [3, 7], "take": [3, 5], "human": [3, 7], "point": [3, 5, 8], "estim": [3, 8], "coordin": 3, "along": [3, 4, 5, 8], "bar": 3, "nav": [3, 5], "head": 3, "try": 3, "enabl": [3, 5, 8], "specif": [3, 5, 8], "wish": [3, 4, 5, 8], "mous": 3, "drag": 3, "direct": 3, "releas": 3, "base": [3, 4, 5, 7, 8], "indic": 3, "wherea": 3, "sent": 3, "sensor": [4, 5], "data": [4, 8], "occup": [4, 6], "grid": [4, 6], "costmap": 4, "how": [4, 5], "suitabl": [4, 8], "physic": [4, 8], "seen": 4, "function": [4, 8], "semi": [4, 7], "pose": [4, 5, 8], "itself": [4, 7], "threat": [4, 5], "choic": [4, 5], "actuat": [4, 7], "ani": [4, 6, 7, 8], "other": [4, 5], "rotat": 4, "shim": 4, "smoother": 4, "side": [4, 8], "chosen": 4, "further": 4, "augment": 4, "certain": 4, "situat": 4, "wors": 4, "With": 4, "real": [4, 5], "tune": [4, 5], "becom": 4, "vital": 4, "don": [4, 6], "scare": 4, "academ": [4, 5, 8], "paper": [4, 5, 8], "necessari": [4, 5, 7, 8], "back": [4, 8], "code": [4, 7], "issu": 4, "magic": 5, "govern": 5, "behaviour": [5, 8], "fiddli": 5, "reliabl": 5, "For": [5, 6, 7, 8], "avail": 5, "visit": 5, "monitor": 5, "given": [5, 7], "measur": 5, "lead": [5, 6], "progress": 5, "choos": [5, 8], "allow": [5, 8], "u": [5, 8], "flexibl": [5, 8], "architectur": 5, "fact": 5, "own": 5, "task": 5, "stick": 5, "dwb": 5, "insid": 5, "joke": 5, "made": 5, "david": 5, "lu": 5, "dynam": [5, 8], "approach": [5, 8], "dwa": 5, "rewritten": 5, "author": 5, "thought": 5, "themselv": 5, "hilari": 5, "b": 5, "come": [5, 8], "after": 5, "origin": 5, "fox": 5, "d": 5, "burgard": 5, "thrun": 5, "1997": 5, "collis": 5, "avoid": [5, 7, 8], "told": 5, "research": 5, "mention": 5, "alter": 5, "e": [5, 6, 7, 8], "g": [5, 7, 8], "faithfulli": 5, "exhaust": 5, "cover": [5, 7, 8], "everi": [5, 8], "sort": 5, "advic": 5, "pleas": [5, 7], "basic": 5, "format": [5, 8], "configur": [5, 8], "taken": [5, 8], "consist": [5, 8], "paramet": [5, 7, 8], "pass": 5, "found": 5, "ros__paramet": [5, 8], "controller_frequ": 5, "20": [5, 8], "min_x_velocity_threshold": 5, "001": 5, "min_y_velocity_threshold": 5, "min_theta_velocity_threshold": 5, "failure_toler": 5, "odom_top": 5, "odom": 5, "progress_checker_plugin": 5, "progress_check": 5, "humbl": 5, "older": 5, "goal_checker_plugin": 5, "goal_check": 5, "controller_plugin": 5, "followpath": 5, "defin": [5, 8], "nav2_control": 5, "simpleprogresscheck": 5, "required_movement_radiu": 5, "movement_time_allow": 5, "10": 5, "simplegoalcheck": 5, "xy_goal_toler": 5, "yaw_goal_toler": 5, "dwb_core": 5, "dwblocalplann": 5, "debug_trajectory_detail": 5, "min_vel_x": 5, "min_vel_i": 5, "max_vel_x": 5, "26": 5, "max_vel_i": 5, "max_vel_theta": 5, "min_speed_xi": 5, "max_speed_xi": 5, "min_speed_theta": 5, "acc_lim_x": 5, "acc_lim_i": 5, "acc_lim_theta": 5, "decel_lim_x": 5, "decel_lim_i": 5, "decel_lim_theta": 5, "vx_sampl": 5, "vy_sampl": 5, "vtheta_sampl": 5, "sim_tim": 5, "7": 5, "linear_granular": 5, "05": 5, "angular_granular": 5, "025": 5, "transform_toler": 5, "trans_stopped_veloc": 5, "short_circuit_trajectory_evalu": 5, "critic": [5, 8], "rotatetogo": 5, "oscil": 5, "baseobstacl": 5, "goalalign": 5, "pathalign": 5, "pathdist": 5, "goaldist": 5, "scale": 5, "02": 5, "32": 5, "forward_point_dist": 5, "24": 5, "slowing_factor": 5, "lookahead_tim": 5, "mani": 5, "option": 5, "system": [5, 7, 8], "carefulli": 5, "notic": [5, 8], "do": [5, 7], "pretti": 5, "them": 5, "modular": 5, "checker": 5, "toler": [5, 8], "close": 5, "nearli": 5, "imposs": 5, "exactli": 5, "ask": 5, "comparison": 5, "onli": [5, 6, 8], "small": 5, "quicker": 5, "regularli": 5, "case": 5, "necessarili": 5, "static": [5, 8], "just": 5, "track": 5, "becaus": 5, "layer": [5, 8], "repres": 5, "ll": 5, "lidar": [5, 7, 8], "inflat": [5, 8], "convert": 5, "edit": [5, 8], "were": [5, 7, 8], "local_costmap": 5, "update_frequ": [5, 8], "publish_frequ": [5, 8], "global_fram": [5, 8], "robot_base_fram": [5, 8], "base_link": [5, 8], "rolling_window": 5, "width": 5, "height": 5, "resolut": [5, 8], "06": [5, 8], "robot_radiu": [5, 8], "175": [5, 8], "obstacle_lay": [5, 8], "inflation_lay": [5, 8], "always_send_full_costmap": [5, 8], "nav2_costmap_2d": [5, 8], "inflationlay": [5, 8], "cost_scaling_factor": [5, 8], "inflation_radiu": [5, 8], "45": [5, 8], "obstaclelay": [5, 8], "observation_sourc": [5, 8], "scan_sourc": [5, 8], "max_obstacle_height": [5, 8], "clear": [5, 8], "mark": [5, 8], "data_typ": [5, 8], "laserscan": [5, 8], "raytrace_max_rang": [5, 8], "raytrace_min_rang": [5, 8], "obstacle_max_rang": [5, 8], "obstacle_min_rang": [5, 8], "final": 5, "lifecycl": [5, 8], "manag": [5, 8], "handl": [5, 7, 8], "pathjoinsubstitut": [5, 7, 8], "pkg_nav_demo": [5, 7, 8], "fix": [5, 7, 8], "remap": [5, 7, 8], "tf": [5, 7, 8], "tf_static": [5, 7, 8], "lifecycle_nod": [5, 8], "behaviour_serv": [5, 7, 8], "bt_navig": [5, 7, 8], "load": [5, 7, 8], "config_bt_nav": [5, 7, 8], "bt_nav": [5, 7, 8], "config_plann": [5, 8], "config_control": 5, "tree": [5, 8], "node_bt_nav": [5, 7, 8], "nav2_bt_navig": [5, 7, 8], "execut": [5, 7, 8], "server": [5, 7, 8], "node_behaviour": [5, 7, 8], "nav2_behavior": [5, 7, 8], "behavior_serv": [5, 7, 8], "node_plann": [5, 8], "nav2_plann": [5, 8], "node_control": 5, "automat": [5, 8], "node_lifecycle_manag": [5, 8], "nav2_lifecycle_manag": [5, 8], "lifecycle_manag": [5, 8], "lifecycle_manager_navig": [5, 8], "autostart": [5, 8], "node_nam": [5, 8], "discuss": 6, "object": [6, 8], "2d": 6, "thei": 6, "mai": [6, 7, 8], "binari": 6, "freespac": 6, "probabilist": 6, "valid": [6, 8], "cross": 6, "cell": 6, "design": [6, 8], "cannot": 6, "simplic": 6, "immedi": 6, "drawback": 6, "when": [6, 7], "suppos": 6, "circular": 6, "diamet": 6, "metr": 6, "figur": 6, "show": 6, "evolut": 6, "concept": [6, 7], "store": 6, "integ": 6, "8": 6, "255": 6, "prefer": [6, 8], "travel": 6, "sai": 6, "forbidden": 6, "reason": 6, "fun": 7, "vacuum": 7, "cleaner": 7, "novelti": 7, "wear": 7, "off": 7, "answer": 7, "decis": 7, "previou": 7, "week": 7, "gradual": 7, "built": 7, "up": 7, "exist": 7, "stone": 7, "capabl": 7, "mobil": 7, "locomot": 7, "input": 7, "kinemat": 7, "produc": 7, "frame": 7, "draw": 7, "keep": [7, 8], "refer": 7, "reli": 7, "familiar": 7, "machin": 7, "somewhat": 7, "11": 7, "so": [7, 8], "black": 7, "box": 7, "high": [7, 8], "level": 7, "consid": 7, "solut": 7, "transit": 7, "mode": 7, "happen": 7, "stuck": 7, "recoveri": 7, "replac": 7, "utilis": 7, "activ": 7, "two": [7, 8], "config": 7, "find_packag": 7, "exclud": 7, "test": 7, "andi": 7, "west": 7, "andrew": 7, "manchest": 7, "ac": 7, "uk": 7, "mit": 7, "Then": 7, "per": [7, 8], "rout": 8, "known": 8, "tri": 8, "therefor": 8, "clever": 8, "later": 8, "each": 8, "suit": 8, "particular": 8, "support": 8, "ackermann": 8, "steer": 8, "car": 8, "main": 8, "end": 8, "actual": 8, "freedom": 8, "give": 8, "dijkstra": 8, "typic": 8, "differenti": 8, "brock": 8, "oussama": 8, "k": 8, "1999": 8, "speed": 8, "practic": 8, "trace": 8, "heritag": 8, "area": 8, "commun": 8, "expected_planner_frequ": 8, "planner_plugin": 8, "gridbas": 8, "nav2_navfn_plann": 8, "navfnplann": 8, "use_astar": 8, "allow_unknown": 8, "under": 8, "explain": 8, "tabl": 8, "meter": 8, "fals": 8, "whether": 8, "expans": 8, "catch": 8, "befor": 8, "size": 8, "global_costmap": 8, "footprint": 8, "footprint_pad": 8, "01": 8, "track_unknown_spac": 8, "static_lay": 8, "staticlay": 8, "map_subscribe_transient_loc": 8, "clearli": 8, "section": 8, "indent": 8, "scheme": 8, "costmap_2d": 8, "github": 8, "calcul": 8, "fit": 8, "gap": 8, "polygon": 8, "four": 8, "rectangular": 8, "chassi": 8, "conceptu": 8, "simpler": 8, "deal": 8, "radiu": 8, "pattern": 8, "old": 8, "realli": 8, "caus": 8, "problem": 8, "method": 8, "circumv": 8, "annoi": 8, "technic": 8, "onlin": 8, "doc": 8, "palett": 8, "color": 8}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"content": 0, "welcom": 0, "week": [0, 2], "10": 0, "synchron": 0, "tutori": [0, 1, 7], "continu": 0, "assess": 0, "softwar": 1, "robot": [1, 2, 3, 6], "09": 2, "save": 2, "map": 2, "step": 2, "1": 2, "make": 2, "packag": [2, 7], "2": 2, "start": 2, "simul": 2, "3": 2, "slam": 2, "you": 2, "probabl": 2, "want": 2, "see": 2, "rviz": 2, "right": 2, "4": 2, "drive": 2, "around": 2, "5": 2, "server": [2, 3], "saver": 2, "option": [2, 8], "send": 3, "goal": 3, "navig": [3, 7], "stack": [3, 7], "action": 3, "pose": 3, "manual": 3, "us": 3, "visual": 3, "tool": 3, "conclus": 4, "ad": [5, 8], "control": 5, "from": [5, 8], "nav2": [5, 8], "The": [5, 8], "write": [5, 8], "config": [5, 8], "file": [5, 8], "local": 5, "costmap": [5, 6, 8], "launch": [5, 8], "how": 6, "repres": 6, "world": 6, "path": [6, 8], "plan": [6, 8], "ar": 6, "Not": 6, "point": 6, "layer": 6, "static": 6, "obstacl": 6, "inflat": 6, "other": 6, "defin": 6, "configur": 6, "yaml": 6, "autonom": 7, "introduct": 7, "behaviour": 7, "tree": 7, "build": 7, "thi": 7, "planner": 8, "navfn": 8, "plugin": 8, "non": 8, "exhaust": 8, "global": 8}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Contents": [[0, "contents"]], "Welcome": [[0, null]], "Week 10 Synchronous Tutorial": [[0, null]], "Continuous Assessment Tutorials": [[0, null]], "Software for Robotics Tutorials": [[1, "software-for-robotics-tutorials"]], "Week 09 - Saving a Map": [[2, "week-09-saving-a-map"]], "Step 1 - Make a Package": [[2, "step-1-make-a-package"]], "Step 2 - Start a Simulation": [[2, "step-2-start-a-simulation"]], "Step 3 - Start SLAM": [[2, "step-3-start-slam"]], "You probably want to see the map in RVIZ right?": [[2, "you-probably-want-to-see-the-map-in-rviz-right"]], "Step 4 - Drive the Robot Around": [[2, "step-4-drive-the-robot-around"]], "Step 5 - Saving the Map": [[2, "step-5-saving-the-map"]], "map server saver options": [[2, "id1"]], "Sending Goals to the Robot Navigation Stack": [[3, "sending-goals-to-the-robot-navigation-stack"]], "Navigation Action Servers": [[3, "navigation-action-servers"]], "Send a Goal Pose Manually": [[3, "send-a-goal-pose-manually"]], "Send a Goal Using Visual Tools": [[3, "send-a-goal-using-visual-tools"]], "Conclusion": [[4, "conclusion"]], "Adding a Controller from Nav2": [[5, "adding-a-controller-from-nav2"]], "The Controller": [[5, "the-controller"]], "Writing the Controller Config File": [[5, "writing-the-controller-config-file"]], "Writing the Local Costmap Config File": [[5, "writing-the-local-costmap-config-file"]], "Adding a Controller to a Launch File": [[5, "adding-a-controller-to-a-launch-file"]], "How to Represent the World for Path Planning": [[6, "how-to-represent-the-world-for-path-planning"]], "Robots Are Not Points": [[6, "robots-are-not-points"]], "Costmaps": [[6, "costmaps"]], "Costmap Layers": [[6, "costmap-layers"]], "Static Layer": [[6, "static-layer"]], "Obstacle Layer": [[6, "obstacle-layer"]], "Inflation Layer": [[6, "inflation-layer"]], "Other Layers": [[6, "other-layers"]], "How to Define a Costmap Configuration in .yaml": [[6, "how-to-define-a-costmap-configuration-in-yaml"]], "Autonomous Navigation Introduction": [[7, "autonomous-navigation-introduction"]], "Behaviour Trees and the Navigation Stack": [[7, "behaviour-trees-and-the-navigation-stack"]], "Build a Package for This Tutorial": [[7, "build-a-package-for-this-tutorial"]], "Adding Path Planning from Nav2": [[8, "adding-path-planning-from-nav2"]], "The Planner": [[8, "the-planner"]], "Writing the Planner Config File": [[8, "writing-the-planner-config-file"]], "NavFn Plugin Options (non-exhaustive)": [[8, "id1"]], "Writing the Global Costmap Config File": [[8, "writing-the-global-costmap-config-file"]], "Adding a Planner to a Launch File": [[8, "adding-a-planner-to-a-launch-file"]]}, "indexentries": {}})