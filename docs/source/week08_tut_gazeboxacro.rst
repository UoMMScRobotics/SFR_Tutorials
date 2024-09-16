Adding Simulation Properties
=============================

Open the file ``/urdf/diff_drive.urdf.xacro`` and take a brief look at the contents. Notice that links have ``<interial\>`` and ``<collision\>`` tags - this makes for quite a lengthy looking file.  The interia matrix can be found online for simple geometries (sphere, box, cylinder), or if you have a mesh file you can find the inertia matrix from CAD software or software like `Meshlab <https://www.meshlab.net/>`_ or `Cloudcompare <https://www.danielgm.net/cc/>`_.  These are critical for the Gazebo physics engine to handle things properly.

This is also the case for real robots!  Manipulators for example often need an accurate estimate of the centre of mass and sometimes interia matrix to handle an end-effector or payload correctly.

Step 1 - Joint State Publisher
-------------------------------





Differential Drive Controller
-------------------------------

Gazebo offers a plugin for a differential drive 