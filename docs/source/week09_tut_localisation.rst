Localisation in a Map
============================

Picture this, you are walking/driving around and trying to figure out where you are.  You might look at road names, landmarks, signs to other points of interest.  This process of figuring out where you are is called localisation.

Imagine our robot is in a known environment, with an existing map, it must localise itself in the map to be able to navigate.  For this exercise, a robot will be spawned into the Turtlebot3 simulation environment, and localised against the existing map provided by the map server.

Inspecting the Launch File
-----------------------------

Once again, before launching any nodes, the launch file will be inspected to understand how it works.

.. literalinclude:: ../../ros_ws/src/example_gz_robot/launch/localisation.launch.py
    :language: xml
    :lines: 9-21
    :lineno-start: 9
    :linenos:
    :emphasize-lines: 8-12

A launch file called ``simulation_bringup.launch.py`` has been provided for this exercise.  This launch file is included in this portion.

.. literalinclude:: ../../ros_ws/src/example_gz_robot/launch/localisation.launch.py
    :language: xml
    :lines: 22-34
    :lineno-start: 22
    :linenos:
    :emphasize-lines: 2,3,11

This should look familiar from the last exercise.  It simply publishes the map as a ros topic based on the .pgm and .yaml file.

.. literalinclude:: ../../ros_ws/src/example_gz_robot/launch/localisation.launch.py
    :language: xml
    :lines: 35-43
    :lineno-start: 35
    :linenos:

To actually provide the localisation, this exercise uses AMCL (`Adaptive Monte Carlo Localisation <http://wiki.ros.org/amcl>`_).  It uses scan matching to estimate the robot position based on the map and lidar scan data, however, the actual algorithm is an extension of the particle filter.

The lifecycle manager once again makes life easier for us, ensuring that AMCL will not start without the map being published for it.

.. literalinclude:: ../../ros_ws/src/example_gz_robot/launch/localisation.launch.py
    :language: xml
    :lines: 54-75
    :lineno-start: 54
    :linenos:

Finally, we use RViz to see the map, the robot and sensor data.

Using Localisation
-----------------------

Run the launch file with,

.. code-block:: console

    source ~/<YOUR_ROS_WS>/install/setup.bash
    ros2 launch example_gz_robot localisation.launch.py

Once everything has loaded, you will immediately notice that the robot has not been localised in the map at all!  This is because AMCL needs an initial guess, published on the ``/initialpose`` topic, consisting of a geometry_msgs/msg/PoseWithCovarianceStamped.

It is diffcult to figure out the coordinates and orientation of the robot in the terminal.  RViz offers a helpful ``2D Pose Estimate`` button, this allows us to put an arrow down approximately where the robot is.


